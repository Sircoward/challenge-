import React from 'react';

class Loading extends React.Component{

    load(cb){
        setTimeout(function() {
            cb();
        }, 3000);

    }
}

export default Loading;