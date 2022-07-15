import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";

function NewRecipe({ user }) {
  const [teacher_id, setTeacher_id] = useState("1");
  const [minutesToComplete, setMinutesToComplete] = useState("3");
  const [instructions, setInstructions] = useState(`Tell us your truth!

## Class Dynamic
-

## Attitude
-

## Grading
-


  `);


  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(teacher_id)
    setIsLoading(true);
    fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        teacher_id: teacher_id,
        instructions: instructions,
        minutes_to_complete: minutesToComplete,
        
      
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });}

  return (
    <Wrapper>
      <WrapperChild>
        <h2>Post Review</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
          <select value={teacher_id} onChange={(e) => setTeacher_id(e.target.value)}>
           <option value="1">Paul Schmitz</option>
           <option value="2">Sasha Vivelo	</option>
           <option value="3"> Jorda Escobar</option>
           <option value="4">Joseph Weintraub</option>
           <option value="5"> Shay Blanchette</option>
           <option value="6">Zhi Li</option>
           <option value="7">John Hodge</option>
         </select>
          </FormField>

          <FormField>
            <Label htmlFor="minutesToComplete">Rating</Label>
            <Input
              type="number"
              id="minutesToComplete"
              value={minutesToComplete}
              onChange={(e) => setMinutesToComplete(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="instructions">Description</Label>
            <Textarea
              id="instructions"
              rows="10"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Recipe"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
      <WrapperChild>
        <p>
          <em>Rating {minutesToComplete} </em>
          &nbsp;·&nbsp;
          <cite>By {user.username}</cite>
        </p>
        <ReactMarkdown>{instructions}</ReactMarkdown>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewRecipe;
