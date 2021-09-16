import React from 'react'

 class Blogs extends React.Component{
    render(){
        return(
            <>
            <div>blogd page</div>
            {/* <iframe src="https://link.medium.com/nvAzgOXqncb"/> */}
            <div id="retainable-rss-embed" 
                data-rss="https://medium.com/feed/retainable,https://medium.com/feed/vue-mastery"
                data-maxcols="3" 
                data-layout="grid" 
                data-poststyle="inline" 
                data-readmore="Read the rest" 
                data-buttonclass="btn btn-primary" 
                data-offset="-100">sas</div>
            </>
        )
    }
}
export default Blogs