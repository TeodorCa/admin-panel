import React from 'react';
import './PostItem.css'

function PostItem(props) {

    const {title, body} = props;
    // ATENTIE! intotdeauna este returnat un singur element HTML
    // (de obicei un div), care le contine pe celelalte!
    return(
        <div className="m-5 mt-4 mb-2 border">
            <h2 className="d-flex m-3 text-center">{ title }</h2>
            <p>{ body }</p>
        </div>
    );
}

export default PostItem;