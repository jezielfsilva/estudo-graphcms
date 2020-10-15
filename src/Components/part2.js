import React from 'react';

class Second extends React.Component {
    render() {
        const item = this.props?.customFragment?.page[1];
        return (
            <div className="container-two">
                <div className="line"></div>
                <div className="container-tree">
                    <figure className="box-photo">Imagem</figure>
                    <div className="box-titleText">
                        <h2 className="title-two">{item?.customFragment[0]?.fragments[0]}</h2>
                        <p className="text">{item?.customFragment[1]?.fragments[0]}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Second;