import React from "react";

const ContactList = (props) => {
    console.log(props);
    const renderContactList = props.contacts.map((contact) = > {
        return(
           <div className = "item">
            <div>
    
           </div>

        )
    })
        

    

       

            
        
    return(
        <div className="ui celled list">
            ContactList
        </div>
    )

});
export default ContactList;