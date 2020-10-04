import React, { useState } from 'react';
import {
    Container,
    ListGroup,
    Button,
} from 'react-bootstrap';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import uuid from 'uuid';
import '../App.css';

function ReactAnimationExample() {
    const [items, setItems] = useState([
        { id: uuid(), text: 'Buy eggs' },
        { id: uuid(), text: 'Pay bills' },
        { id: uuid(), text: 'Invite friends over' },
        { id: uuid(), text: 'Fix the TV' },
    ]);
    return (
        <Container style={{ marginTop: '2rem' }}>
            <ListGroup style={{ marginBottom: '1rem' }}>
                <TransitionGroup className="todo-list">
                    {items.map(({ id, text }) => (
                        <CSSTransition
                            key={id}
                            timeout={500}
                            classNames="item"
                        >
                            <ListGroup.Item>
                                <Button
                                    className="remove-btn"
                                    variant="danger"
                                    size="sm"
                                    onClick={() =>
                                        setItems(items =>
                                            items.filter(item => item.id !== id)
                                        )
                                    }
                                >
                                    &times;
                </Button>
                                {text}
                            </ListGroup.Item>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
            <Button
                onClick={() => {
                    const text = prompt('Enter some text');
                    if (text) {
                        setItems(items => [
                            ...items,
                            { id: uuid(), text },
                        ]);
                    }
                }}
            >
                Add Item
      </Button>
        </Container>
    );
}
export default ReactAnimationExample;

 // ReactTransitionGroup : used as a low-level API animation
    // ReactCSSTransitionGroup: used as a high-level API for implementing basic CSS Transitions and animation

    // npm install react-transition-group
    // Its provides three main component:
    // 1. Transition
    // 2. CSSTransition
    // 3. Transition Group



    // TRANSITION:
    // 1. entering
    // 2. entered
    // 3. exiting
    // 4. exited

    //CSS TRANSITION:
    // 1. Appear
    // 2. Enter
    // 3. Exit

    // TRANSITIONGROUP
    // used to manage set of transition