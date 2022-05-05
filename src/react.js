import React from "react";
import './style.css';
class ShoppingList extends React.Component{
   
    render(){
        const author = [
            {
                name : "Thanh",
                age: 21,
                post :{
                    content :"React",
                    date : "28"
                },
                comment: [
                    {
                    name :"Thanh",
                    comment :"60TH2"
                    }
                ]
            }
            
               
            
        ]

    
        return(
            <>
            {author.map((post,index) =>{
                console.log(post,index,"post","index");
                return (
                    <>
                    <h1>ten:{post.name}</h1>
                    <h1>tuoi:{post.age}</h1>
                    <div className="cointainer" >
                        <span>
                            {post.post.content}
                        </span>
                        <span>{post.post.date}</span>
                        
                    </div>
                   {post.comment.map((comment,index) =>{
                       console.log(comment,index,"comment","index");
                       return(
                           <>
                           <div className="comment" >
                                <span>{comment.name}</span>
                                <span>{comment.comment}</span>
                           </div>

                           </>
                       )
                   })}
                    </>
                )
            })}
            {/* {author.map((comment,index) =>{
                console.log(comment,index,"comment","index");
                return (
                    <>
                    <h1>ten:{comment.name}</h1>
                    <span>{comment.comment}</span>
                    
                   
                    </>
                )
            })} */}
                
        </>        

        )
    }
}
export default ShoppingList;