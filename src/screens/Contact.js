

export default function ContactPage (){

    return(

        <div >
            <div className="contact">

            <form action="https://formsubmit.co/your@email.com" method="POST">
                <input type="text" name="name" placeholder="Name" required /> 
                <input type="email" name="email" placeholder="Email" required />
                <button type="submit">Send</button>
            </form>

            </div>
            
        </div>
    )
      
}