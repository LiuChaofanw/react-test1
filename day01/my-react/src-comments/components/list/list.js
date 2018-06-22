import React,{Component} from "react"
import Item from "../item/item"
import "./list.css"
import PropTypes from "prop-types"

export default class List extends Component{
    static proptypes={
        comments:PropTypes.array.isRequired,
        deleteComment:PropTypes.func.isRequired
    }
    render(){
        const display = this.props.comments.length===0 ? "block":"none"
        return(
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display:display}}>暂无评论，点击左侧添加评论！！！</h2>
                <Item comments={this.props.comments} deleteComment={this.props.deleteComment}/>
            </div>
        )
    }
}
