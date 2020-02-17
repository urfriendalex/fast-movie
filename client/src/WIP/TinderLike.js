import React from 'react';
import Card from './CardPrev'


class TinderLike extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            data: [0, 1, 2, 3, 4]
        };
        this.count = 1;
        this.collectRefs = [];
    }
    
    onClick = (love) => {
        if(this.collectRefs[this.collectRefs.length - this.count].state.visible){
            this.collectRefs[this.collectRefs.length - this.count].handleButtonEvent(love);
        }else{
            this.count++;
            this.collectRefs[this.collectRefs.length - this.count].handleButtonEvent(love);
        };
        this.count++;
        if(this.collectRefs.length+1 === this.count){
            let el = document.getElementById("btnGroup");
            el.parentElement.removeChild(el);
        }
    }



    render() {
        return (
            <div>
            {
                this.state.data.map((i) =>
                    <Card ref={card => {this.collectRefs.push(card)}} key={i} no={i} />
                )
            }
            <div id='btnGroup'>
            <button onClick={() => {this.onClick(false)}} className='btn dislike'>no</button>
            <button onClick={() => this.onClick(true)} className='btn like'>yes</button>
            </div>
            </div>
        )}
}

export default TinderLike;