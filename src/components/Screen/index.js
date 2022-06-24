export function Screen ({foodName , foodImage}) {
    console.log(foodImage)
return (
<div key={foodName}>
  <p> {foodName} </p>
  <img src={foodImage} alt={foodName} width={100} />
</div>
)



}

