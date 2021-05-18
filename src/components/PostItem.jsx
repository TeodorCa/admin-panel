import React from 'react';


function PostItem(props) {

    const {title, body} = props;
    // ATENTIE! intotdeauna este returnat un singur element HTML
    // (de obicei un div), care le contine pe celelalte!
    return(
        <div>
            <h2>{ title }</h2>
            <p>{ body }</p>
        </div>
    );
}

export default PostItem;