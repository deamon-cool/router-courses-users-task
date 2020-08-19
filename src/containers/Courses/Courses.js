import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import './Courses.css';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        choosenTitle: null
    }

    clickHandle = (id) => {
        const course = this.state.courses.find(course => course.id === id);

        this.setState({ choosenTitle: course.title });
    }

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return (
                                <Link onClick={() => this.clickHandle(course.id)} to={'/courses/' + course.id} key={course.id}>
                                    <article className="Course">{course.title}</article>
                                </Link>
                            );
                        })
                    }
                </section>
                <Route path='/courses/:id' render={(props) => <Course {...props} title={this.state.choosenTitle} />} />
                {/* <Route path='/courses/:id' component={Course} /> */}

            </div>
        );
    }
}

export default Courses;