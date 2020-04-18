import React from 'react';
import { Link } from 'react-router-dom';

const BlogsTable = (props) => {
    return(
        <table className="table table-hover">
            <thead>
                <tr className="bg-dark text-light">
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Content</th>
                </tr>
            </thead>
            <tbody>
                {props.lists.map((e) => 
                    <tr className="table-success" key={e.id}>
                        <td><Link to={"/blog/"+e.id}>{e.id}</Link></td>
                        <td>{e.title}</td>
                        <td>{e.content}</td> 
                    </tr>
                )}
            </tbody>
        </table>
    )
}
export default BlogsTable;