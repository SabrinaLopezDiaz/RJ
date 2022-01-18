import UserCard from "../UserCard";

const CardContainer = () => {
    const saludar = () => {
        console.log("Hola");
    };
    const isAdult = (age) => {
        return age >= 18;
    };
}

return (
    <>
      <UserCard
              name="Sabrina"
              age={28}
              hobbies={"codear"}
              isAdult={isAdult(28)}
      >    
      </UserCard>
      <UserCard
              name="Sabrina"
              age={28}
              hobbies={"codear"}
              isAdult={isAdult(28)}
      >    
      </UserCard>
    </>
);