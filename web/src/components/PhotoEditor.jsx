import { useEffect, useState } from "react";
import {Container, Row, Col, Form, InputGroup} from 'react-bootstrap';

function PhotoEditor(){
    const [values, setValues] = useState([
        {id: 1, name: "exposure", value: 0}, {id: 2, name: "brilliance", value: 0}, {id: 3, name: "highlights", value: 0},
        {id: 4, name: "shadows", value: 0}, {id: 5, name: "contrast", value: 0}, {id: 6, name: "brightness", value: 0},
        {id: 7, name: "black points", value: 0}, {id: 8, name: "saturation", value: 0}, {id: 9, name: "vibrancy", value: 0},
        {id: 10, name: "warmth", value: 0}, {id: 11, name: "tint", value: 0}, {id: 12, name: "sharpness", value: 0},
        {id: 13, name: "definition", value: 0}, {id: 14, name: "noisy reduction", value: 0}, {id: 15, name: "vignette", value: 0}
        ]);

    const handleChange = (id, newValue) => {
        setValues(values.map(slider =>
            slider.id === id ? { ...slider, value: Number(newValue) } : slider
        ));
    };

    return(
        <Container>
            <Row lg={4}>
                {values.map((item) => {
                    const min = ["sharpness", "definition", "noisy"].includes(item.name) ? 0 : -100;
                    const lb = item.name.replace(/\b[a-z]/g, (match) => match.toUpperCase());
                    return(
                        <Col key={item.id}>
                            <Form.Label>{lb}</Form.Label>
                            <InputGroup>
                                <Form.Range min={min} max="100" name={item.name} value={item.value} onChange={(e) => handleChange(item.id, e.target.value)}  />
                                <Form.Control type="number" min={min} max="100" name={item.name} value={item.value} onChange={(e) => handleChange(item.id, e.target.value)} />
                            </InputGroup>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default PhotoEditor;