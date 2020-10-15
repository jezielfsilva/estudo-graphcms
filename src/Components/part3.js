import React from 'react';

class Third extends React.Component {
    render() {
        return (
            <div className="container-four">
                <div className="box-come">
                    <div className="box-titleText2">
                        <h2 className="title-tree">{this.props?.customFragment?.page[2]?.customFragment[0]?.fragments[0]}</h2>
                        <p className="text-two">{this.props?.customFragment?.page[2]?.customFragment[1]?.fragments[0]}</p>
                    </div>
                    <div className="box-circles">
                        <div className="ellipse"></div>
                        <div className="ellipse2"></div>
                        <div className="ellipse3"></div>
                    </div>
                </div>
                <div className="box-final">
                    <figure className="box-photo2">Imagem</figure>
                    <div className="box-titleText3">
                        <h2 className="title-four">{this.props?.customFragment?.page[3]?.customFragment[0]?.fragments[0]}</h2>
                        <p className="text-tree">{this.props?.customFragment?.page[3]?.customFragment[1]?.fragments[0]}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Third;
