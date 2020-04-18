import React from 'react';
import { connect } from 'react-redux';
import BlogsTable from './BlogsTable';

class Blogs extends React.Component {
    
    render() {
        //console.log(this.blogs);
        return (<div>
            <div><BlogsTable lists={this.props.blogs} /></div>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        blogs : state.blog.blogs
    }
}

export default connect(mapStateToProps,null)(Blogs)