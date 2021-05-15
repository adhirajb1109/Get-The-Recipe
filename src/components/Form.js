import React from "react";
import { Form, Button, Card } from "react-bootstrap";
function Forms() {
  function Generate(event) {
    event.preventDefault();
    let dish = document.getElementById("dish").value;
    let app_id = "2b64a2dd";
    let app_key = "adf420a2cc0db5a9519077196e935c7c";
    fetch(
      `https://api.edamam.com/search?q=${dish}&app_id=${app_id}&app_key=${app_key}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let foodImg = data.hits[0].recipe.image;
        let ingredients = data.hits[0].recipe.ingredientLines;
        let link = data.hits[0].recipe.url;
        document.getElementById("foodImg").src = foodImg;
        document.getElementById("ingredients").innerHTML =
          ingredients.join("<li>");
        document.getElementById("link").href = link;
        document.getElementById("link").innerHTML = link;
        document.getElementById("card").style.display = "block";
      });
  }
  function Clear(event) {
    event.preventDefault();
    document.getElementById("card").style.display = "none";
    document.getElementById("dish").value = "";
  }
  return (
    <div className="container my-4">
      <Form className="my-5" id="form">
        <Form.Group>
          <Form.Label>Enter Dish Name : </Form.Label>
          <Form.Control type="text" placeholder="Enter Dish Name :" id="dish" />
        </Form.Group>
        <Button variant="success" type="submit" onClick={Generate}>
          Generate
        </Button>
        <br />
        <br />
        <Button variant="danger" type="submit" onClick={Clear}>
          Clear
        </Button>
      </Form>
      <Card style={{ width: "21rem" }} id="card">
        <Card.Img variant="top" src="" id="foodImg" />
        <Card.Body>
          <Card.Title>Ingredients : </Card.Title>
          <Card.Text id="ingredients">{}</Card.Text>
          <Card.Text>Recipe Link :</Card.Text>
          <Card.Link href="" id="link">
            {}
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Forms;
