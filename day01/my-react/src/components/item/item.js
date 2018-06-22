import React,{Component} from "react"
import "./item.css"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {deleteComment} from "../../redux/actions";

class Item extends Component{
    static proptypes={
        comments:PropTypes.array.isRequired,
        deleteComment:PropTypes.func.isRequired
    }
    // deleteComment=(event)=>{
    //     this.props.deleteComment(event);
    //     console.log(event)
    // }
    render(){
        return(
            <ul className="list-group">
                {
                    this.props.comments.map((comment,index)=>{
                        return (
                            <li className="list-group-item" key={index}>
                                <div className="handle">
                                    <a href="javascript:;" onClick={()=>{this.props.deleteComment(index)}}>删除</a>
                                </div>
                                <p className="user"><span >{comment.username}</span><span>说:</span></p>
                                <p className="centence">{comment.content}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default connect(
    state=>({comments:state}),
    {deleteComment}
)(Item)