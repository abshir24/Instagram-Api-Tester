module.exports = {

    test:(req,res)=>{
        console.log("ios connection success")
        console.log(req.params.hashtag)


        let userid = "106087904030653",
                tag = req.params.hashtag
                    apilink = "graph.facebook.com/ig_hashtag_search?user_id=" + userid +"4&q="+tag

        var hashtagid;

        request.get(apilink, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log("SUCCESS ID ",response.id) // Print the google web page.
            }
        })
       
        res.send("Connected Successfully!")
    }


}

