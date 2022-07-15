

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";


function Home() {
    const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("/teachers")
      .then((r) => r.json())
      .then((data) => setTeachers(data));
  }, []);

  

  
  return (
      <Wrapper>
      {teachers.length > 0 ? (
          teachers.map((teacher) => { 
            console.log(teacher.recipes)
         return(
          <Recipe key={teacher.id}>
            <Box>
            <img src={teacher.image_url} alt="shoes" style={{width:"50%"}} className="image-top"/>
              <h2>{teacher.name}</h2>
         
          <p>{teacher.recipes.instructions}</p> 
            <ul>
              {teacher.recipes.map((recipe) => {
               return <Recipe key={recipe.id}>
               <Box>
              
                 <h2>{recipe.title}</h2>
                 <ReactMarkdown>{recipe.instructions}</ReactMarkdown>
               </Box>
             </Recipe> }
              )}
              </ul>
              
            </Box>
          </Recipe>
        )})
      ) : (
        <>
          <h2>No Teachers Found</h2>
          <Button as={Link} to="/new">
            Make a New Teacher
          </Button>
        </>
      )}
    </Wrapper>
  );

  }


const Wrapper = styled.section`
max-width: 800px;
margin: 40px auto;
`;

const Recipe = styled.article`
margin-bottom: 24px;
`;



  export default Home;
