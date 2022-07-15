# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.destroy_all 
Recipe.destroy_all
Teacher.destroy_all


puts "🍕 Seeding users..."
User.create!([
    {
        username: "skuri1@babson.edu",
        password: "KuriKing7"
      
    },
    {
        username: "rkalach@babson.edu",
        password: "Rafita123"
       
      }, 
      {
        username: "rcasillas@babson.edu",
        password: "Rob123"
      
      }, 
      {
        username: "ecajiga@babson.edu",
        password: "ecajiga123"
       
      }, 
      {
        username: "rfuster@babson.edu",
        password: "rfuster123"
      
      },
      {
        username: "dchiriboja@babson.edu",
        password: "dchiriboja123"
      
      },
      {
        username: "mchiriboja@babson.edu",
        password: "mchiriboja123"
       
      },
      {
        username: "rgil@babson.edu",
        password: "rgil123"
       
      },
      {
        username: "rtorrado@babson.edu",
        password: "rtorrado123"
       
      },
      {
        username: "jsialus@babson.edu",
        password: "jsialus123"
       
      },
      {
        username: "msenderos@babson.edu",
        password: "msenderos123"
       
      },
      {
        username: "vvinduja@babson.edu",
        password: "vvinduja123"
       
      },
      {
        username: "caiza@babson.edu",
        password: "caiza123"
       
      },
      {
        username: "idelgado@babson.edu",
        password: "idelgado123"
       
      },
      {
        username: "aarmanteros@babson.edu",
        password: "armanteros123"
       
      },
      {
        username: "amijares@babson.edu",
        password: "amijares123"
        
      }

])


puts "🍕 Seeding teachers..."

Teacher.create!([
    {
      name: "Paul Schmitz",
      image_url: "https://facultyprofilefiles.babson.edu/MirroredFiles/pschmitz/pci/Schmitz%20Faculty%20Photo-1.jpg"
    },
    {
    name: "Sasha Vivelo",
    image_url: "https://www.bu.edu/writingprogram/files/2016/09/Vivelo-bio-photo.jpg"
    },
    {
      name: " Jorda Escobar",
      image_url: "https://facultyprofilefiles.babson.edu/MirroredFiles/jescobar/pci/escobar-jordan-1.jpeg"
      },
      {
        name: "Joseph Weintraub",
        image_url: "https://facultyprofilefiles.babson.edu/MirroredFiles/weintraub/pci/Weintraub_J-04-web%20photo%2010-13-1.jpg"
      },
      {
      name: "Shay Blanchette",
      image_url:"https://facultyprofilefiles.babson.edu/MirroredFiles/sblanchetteproulx/pci/blanchette-proulx-shay-1.jpg"
      },
      {
        name: "Zhi Li",
        image_url: "https://facultyprofilefiles.babson.edu/MirroredFiles/zli/pci/LiZ-1.jpg"
        },
        {
          name: "John Hodge",
          image_url: "https://facultyprofilefiles.babson.edu/MirroredFiles/jhodge/pci/hodge-jon-1.jpg"
          }
    ])









