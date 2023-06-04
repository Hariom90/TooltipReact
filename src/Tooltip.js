import React from 'react';
//..................................................here is the tooltip class based component.......................................................


class Tooltip extends React.Component{
    classn=()=>{
        
        return `${this.props.position}`;
    }

    render(){
        return (
            <div className={`${this.classn()}`}>
                 "{this.props.position}" position!!! Thanks for hovering
            </div>
        )
    }
}


export default Tooltip;