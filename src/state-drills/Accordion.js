import React from 'react';
import './Accordion.css'

class Accordion extends React.Component {
    state = {
        currentIndex: 0,
        hidden: false,
    }


    handleButtonClick(index) {
        this.setState({ 
            currentIndex: index,
            hidden: !this.state.hidden,
        })

    }

    renderSections() {
        //map over sections, rendering a button for each section
        return this.props.sections.map((section, index) => (
            <div>
                <ul>
                    <li>
                        <button key={index} onClick={() => this.handleButtonClick(index)}>
                            {section.title}
                        </button>
                    </li>
                </ul>
                {this.state.hidden?<p>{section.content}</p>:null}
            </div>



        ))
    }

    renderContent() {
        //create a constant for the section
        const currentSection = this.props.sections[this.state.currentIndex]
        return (
            <p>{currentSection.content}</p>
        )
    }

    render() {
        return (
            <div>
                {this.renderSections()}
            </div>
        )
    }
}

export default Accordion;