import React from 'react';

class Third extends React.Component {
    render() {
        const item = this.props?.customFragment?.page[2];
        const item2 = this.props?.customFragment?.page[3];
        return (
            <div className="container-four">
                <div className="box-come">
                    <div className="box-titleText2">
                        <h2 className="title-tree">{item?.customFragment[0]?.fragments[0]}</h2>
                        <p className="text-two">{item?.customFragment[1]?.fragments[0]}</p>
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
                        <h2 className="title-four">{item2?.customFragment[0]?.fragments[0]}</h2>
                        <p className="text-tree">{item2?.customFragment[1]?.fragments[0]}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Third;
