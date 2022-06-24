import { Card, Col, Button } from 'antd';

// Iteration 2
export function FoodBox({food , name , calories , image , servings}) {
    console.log(food.name)
  return (
    <div key={food.name}>
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt={food.name} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories} * {food.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
    </div>
  );
}