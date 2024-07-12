function menu(arg){
    let store=document.querySelector('#menu');

    if(arg===0){
        document.querySelector('#menu').innerHTML='';
    }
    if(arg===1)
    {
        let design=
        `<div id="menu-1">
        <div id="menu-1-1">
            <div id="head">Shop</div>
            <div>Shop the Latest</div>
            <div>Mac</div>
            <div>iPad</div>
            <div>iPhone</div>
            <div>Apple Watch</div>
            <div>Apple Vision Pro</div>
            <div>Accessories</div>
        </div>
    
        <div id="menu-1-2">
            <div id="head">Quick Links</div>
            <div>Find a Store</div>
            <div>Order Status</div>
            <div>Apple Trade In</div>
            <div>Financing</div>
            <div>College Student Offer</div>
        </div>
        <div id="menu-1-3">
            <div id="head">Shop Special Stores</div>
            <div>Certified Refurbished</div>
            <div>Education</div>
            <div>Business</div>
            <div>Veterans and Military</div>
            <div>Govemment</div>
        </div>
    </div>`;
        store.innerHTML=design;
    }

    if(arg===2)
    {
        let design=
        `<div id="menu-1">
        <div id="menu-1-1">
            <div id="head">Explore Mac</div>
            <div>Explore All Mac</div>
            <div>MacBook Air</div>
            <div>MacBook Pro</div>
            <div>iMac</div>
            <div>Mac mini</div>
            <div>Mac Studio</div>
            <div>Mac Pro </div>
            <div>Displays</div>
        </div>
    
        <div id="menu-1-2">
            <div id="head">Shop Mac</div>
            <div>Shop Mac</div>
            <div>Help Me Choose</div>
            <div>Mac Accessories</div>
            <div>Apple Trade in</div>
            <div>Financing</div>
            <div>College Student Offer</div>
        </div>
       
        <div id="menu-1-3">
            <div id="head">More From Mac</div>
            <div>Mac Support</div>
            <div>AppleCare+ For Mac</div>
            <div>macOS Sequoia Preview</div>
            <div>Apple Intelligence</div>
            <div>Apps By Apple</div>
            <div>Continuity</div>
            <div>iCloud</div>
            <div>Mac for Business</div>
            <div>Education</div>
        </div>
    </div>`;
    store.innerHTML=design;

    }
    if(arg===3){
        let design=`   <div id="menu-1">
        <div id="menu-1-1">
         
            <div id="head">Explore iPad</div>
            <div>Explore All iPad</div>
            <div>iPod Pro</div>
            <div>iPod Air</div>
            <div>iPad</div>
            <div>iPad mini</div>
            <div>Apple Pencil</div>
            <div>Keyboards</div>
            <div>Compare iPad</div>
            <div>Why iPad</div>
        </div>
    
        <div id="menu-1-2">
            <div id="head">Shop iPad</div>
            <div>Shop iPad</div>
            <div>iPad Accessories</div>
            <div>Apple Trade in</div>
            <div>Financing</div>
            <div>College Student Offer</div>
        </div>
       
        <div id="menu-1-3">
            <div id="head">More From iPad</div>
            <div>iPad Support</div>
            <div>AppleCare+ For iPad</div>
            <div>iPadOS 18  Preview</div>
            <div>Apple Intelligence</div>
            <div>Apps By Apple</div>
            <div>Continuity</div>
            <div>iCloud+</div>
            <div>Education</div>
        </div>
    </div>`;
    store.innerHTML=design;
    }
    if(arg===4)
    {
        let design=
        `<div id="menu-1">
        <div id="menu-1-1">
         
            <div id="head">Explore iPhone</div>
            <div>Explore All iPhone</div>
            <div>iPhone 15 Pro</div>
            <div>iPhone 15</div>
            <div>iPhone 14</div>
            <div>iPhone 13</div>
            <div>iPhone SE</div>
            <div>Compare iPhone</div>
            <div>Switch from Android</div>
            <div>Why iPad</div>
        </div>
    
        <div id="menu-1-2">
            <div id="head">Shop iPhone</div>
            <div>Shop iPhone</div>
            <div>iPhone Accessories</div>
            <div>Apple Trade in</div>
            <div>Carrier Deals at Apple</div>
            <div>Financing</div>         
        </div>
       
        <div id="menu-1-3">
            <div id="head">More from iPhone</div>
            <div>iPhone Support</div>
            <div>AppleCare+ For iPhone</div>
            <div>iOS 18  Preview</div>
            <div>Apple Intelligence</div>
            <div>Apps By Apple</div>
            <div>iPhone Privacy</div>
            <div>iCloud+</div>
            <div>Wallet, Pay, Card</div>
            <div>Siri</div>
        </div>
    </div>`;
    store.innerHTML=design;
    }
    if(arg===5){
        let design=`<div id="menu-1">
        <div id="menu-1-1">
         
            <div id="head">Explore Watch</div>
            <div>Explore All Apple Watch</div>
            <div>Apple Watch Series 9</div>
            <div>Apple Watch Ultra 2</div>
            <div>Apple Watch SE</div>
            <div>Apple Watch Nike</div>
            <div>Apple Watch Hermes</div>
            <div>Compare Watch</div>
            <div>Why Apple Watch</div>
        </div>
       
        <div id="menu-1-2">
            <div id="head">Shop Watch</div>
            <div>Shop Apple Watch</div>
            <div>Apple Watch Studio</div>
            <div>Apple Watch Bands</div>
            <div>Apple Watch</div>
            <div>Accessories</div>   
            <div>Apple Trade In</div>
            <div>Financing</div>      
        </div>
      
        <div id="menu-1-3">
            <div id="head">More from Watch</div>
            <div>Apple Watch Support</div>
            <div>AppleCare+</div>
            <div>watchOS 11  Preview</div>
            <div>Apps By Apple</div>
            <div>Apple Fitness+</div>
        </div>
    </div>`;
        store.innerHTML=design;
    }
    if(arg===6){
        let design=` <div id="menu-1">
        <div id="menu-1-1">
         
            <div id="head">Explore Vision</div>
            <div>Explore Apple Vision Pro</div>
            <div>Guided Tour</div>
            <div>Tech Spacs</div>
        </div>
       
        <div id="menu-1-2">
            <div id="head">Shop Vision</div>
            <div>Shop Apple Vision Pro</div>
            <div>Apple Vision Pro</div>
            <div>Accessories</div>
            <div>Book a Demo</div>
            <div>Financing</div>      
        </div>
    
        <div id="menu-1-3">
            <div id="head">More from Vision</div>
            <div>Apple Vision Pro</div>
            <div>Support</div>
            <div>AppleCare+</div>
            <div>visionOS 2  Preview</div>
        </div>
    </div>`;
    store.innerHTML=design;
    }
    if(arg===7){
        let design=` <div id="menu-1">
        <div id="menu-1-1">
            
            <div id="head">Explore AirPods</div>
            <div>Explore All AirPods</div>
            <div>AirPods Pro 2nd generation</div>
            <div>AirPods 2nd generation</div>
            <div>AirPods 3rd generation</div>
            <div>AirPods Max</div>
            <div>Compare AirPods</div>
        </div>
       
        <div id="menu-1-2">
            <div id="head">Shop AirPods</div>
            <div>Shop AirPods</div>
            <div>AirPods Accessories</div>      
        </div>
        <div id="menu-1-3">
            <div id="head">More from AirPods</div>
            <div>AirPods Support</div>
            <div>AppleCare+ for Headphones</div>
            <div>Apple Music</div>
        </div>
    </div>`;
        store.innerHTML=design;
    }
    if(arg===8){
        let design=`<div id="menu-1">
        <div id="menu-1-1">
            <div id="head">Explore TV & Home</div>
            <div>Explore TV & Home</div>
            <div>Apple TV 4K</div>
            <div>HomePod</div>
            <div>HomePod mini</div>
        </div>
       
        <div id="menu-1-2">
            <div id="head">Shop TV & Home</div>
            <div>Shop Apple TV 4K</div>
            <div>Shop Homepod</div>      
            <div>Shop HomePod mini</div>
            <div>Shop Siri Remote</div>
            <div>TV & Home Accessories</div>
        </div>
        
        <div id="menu-1-3">
            <div id="head">More from TV & Home</div>
            <div>Apple TV Support</div>
            <div>Homepod Support</div>
            <div>Apple Music</div>
            <div>AppleCare+</div>
            <div>Apple TV app</div>
            <div>Apple</div>
            <div>Home app</div>
            <div>Apple Music</div>
            <div>Siri</div>
            <div>Air Play</div>
        </div>
    </div>`;
    store.innerHTML=design;
    }
    if(arg===9){
        let design=` <div id="menu-1">
    
    
        <div id="menu-1-1">
            <div id="head">Explore Entertainment</div>
            <div>Explore Entertainment</div>
            <div>Apple One</div>
            <div>Apple TV+</div>
            <div>Apple Music</div>
            <div>Apple Arcade</div>
            <div>Apple Fitness+</div>
            <div>Apple News+</div>
            <div>Apple Podcasts</div>
            <div>Apple Books</div>
            <div>App Store</div>
        </div>
        
        
        
        <div id="menu-1-2">
            <div id="head">Support</div>
            <div>Apple Support</div>
            <div>Apple Music Support</div>  
        </div>
        
    </div>`;
    store.innerHTML=design;
    }
    if(arg===10)
    {
        let design=`   <div id="menu-1">

        <div id="menu-1-1">
            <div id="head">Shop Accessories</div>
            <div>Shop All Accessories</div>
            <div>Mac</div>
            <div>iPad</div>
            <div>iPhone</div>
            <div>Apple Watch</div>
            <div>Apple Vision Pro</div>
            <div>AirPods</div>
            <div>TV & Home</div>
        </div>       
        
        <div id="menu-1-2">
            <div id="head">Explore Accessories</div>
            <div>Made by Apple</div>
            <div>Beats by Dr. Dre</div>  
            <div>Air Tag</div>
        </div>
        
    </div>`;
    store.innerHTML=design;
    }
    if(arg===11){
        let design=` <div id="menu-1">

        <div id="menu-1-1">
            <div id="head">Explore Support</div>
            <div>iPhone</div>
            <div>Mac</div>
            <div>iPad</div>
            <div>Watch</div>
            <div>Apple Vision Pro</div>
            <div>AirPods</div>
            <div>Music</div>
            <div>TV</div>
            <div>Explore Support</div>
        </div>
       
        <div id="menu-1-2">
            <div id="head">Get Help</div>
            <div>Community</div>
            <div>Check Coverage</div>      
            <div>Repair</div>
            <div>Contact Us</div>
        </div>
        
        <div id="menu-1-3">
            <div id="head">Helpful Topics</div>
            <div>Get AppleCare+</div>
            <div>Apple ID & Password</div>
            <div>Billing & Subscriptions</div>
            <div>Find My</div>
            <div>Accessibility</div>
        </div>
    </div>`;
    store.innerHTML=design;
    }
}