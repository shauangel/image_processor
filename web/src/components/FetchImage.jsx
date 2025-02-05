import { useEffect, useState } from "react";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function FetchData() {
    const url = "https://anchi-imgprocessor.s3.us-east-2.amazonaws.com/uploads/images/test.png?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLWVhc3QtMiJHMEUCIQDN9RiNvvGnMfofWqN7xprzRptu8upGb4GNtWIGs8cokwIgV93ZFkNVSa3skPJAN4AQh6%2BqSw%2Bf4RhE9lLQtfoPTYUqywMISRAAGgw0ODE2NjUxMjYzNzEiDPa6xld39DRJAzhCYSqoA5TW0t%2F3JNmqbVn5vMAnyTMAgOmh0YMF6QsCR85QCNmmp17nK4DYDIre9KpsdETvRiA9gktpiMEiE85hm0zkpZL7cFV%2BxcnbYNZFOdDAMrkwV%2BMVAlZ%2FuHty8%2BO9cFgzZw770HjnckHCd4mbOwTTPal%2BF6KTYlxhif9gZO7JtbJaoz5XR37T0AwfC5pgTH88IEtGlDzUrYBEBl%2BS6%2FIoRrRa0SlsMgk%2Fd%2BAU6L0RgcpVee2OR2LEcum1BmE1nQaql9FfcmDjr0Db4rmEU9jUcw1LXEdLUHu1NxSM4%2FCLMSlrdnVH3ovJr21ulmkJrQ8qb56pO3xub24gqaCVJWpw%2FEDP5GKQNFDKIa0RVzM%2FTB%2FVcEjYDRYFxW2gYA84w5wPkMe%2FMeJd3WmF2ZkMtiJ38tNK5aPLcaM5vudynFwjN17KrNnUicHUQGW1%2BpZCagt2i4Lg%2FBVHAPdkHctEjMd92lmUxal95RiNGQcHq94oZoPdpc033LNqTiDe7oKneYi9BhGEV9sdeyq3ngrZzryq3tutSqick0SQs6Ix7Bc2zZIJZ%2FVjhYZrEecwh4COvQY65AL%2FhC7ZcArRvKPJu0Ck5GYjd%2FpyTd86oilV0r4LLJKnCe8NXZDmGrFeexoTZXvQ3PkNrILnJDKG2wI%2BYI%2FzzEUm3Ueo8mLVBUqa5auuBsNWS4ahasaSq2a1EZuaTa8tPU4MeI6g7QmN%2Fi2w2D26uZb%2FPcv5DHYvmHAs5zti7KYYlFoJuFv%2BmQ9O5hARW%2BdbiI3e9IP%2Br0J9cOmTKUDkp3d8GzqWpFUhcSvbuYhP76xDTeBqRwwyBVZTEjevb8HJz%2Fe2TwNBnllGdJnQ0v9mC4bV95tczvsvNk%2B8PwIOW8X4jKJ%2BlW8AFKfjYQTfHd5hgWprkpZisadd1x9i7ZjesjhR5YgwC3UvqYTsvHNpR4EIjyJOt9vP3PRuENLeobMd249eb6NLp6V%2FfFvlGDJrsCtF2606i7FvxG6YEDx%2FSIbb9fxheWiopfobXCSFOzAZgXO56BMKgbYf5gAs%2FLuqnV2NFvnXWw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAXAJL2R7R2I2PUQSC%2F20250205%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T152502Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=49c3f1841798035f8552c4ab80f17fe183aea5baa07894a6cf559094d8fd6abe"
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/api/data") // Calls Flask backend
//       .then((response) => response.json())
//       .then((data) => setData(data.message))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);
    return(
        <Container>
            <Row>
                <Col></Col>
                <Col sm={8}>
                    <Image src={url} fluid/>
                </Col>
                <Col></Col>
            </Row>
        </Container>
        );
}

export default FetchData;
