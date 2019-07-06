//
//  ViewController.swift
//  igtest
//
//  Created by Abshir Mohamed on 7/3/19.
//  Copyright © 2019 Abshir Mohamed. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    let server = "http://localhost:8000/test"
    
    @IBOutlet weak var responseLabel: UILabel!
    
    @IBOutlet weak var userinput: UITextField!
    
    @IBAction func runApi(_ sender: UIButton) {
        guard let url  = URL(string: server + userinput.text!) else {return}
        // background task to make request with URLSession
        let task = URLSession.shared.dataTask(with: url) {
            (data, response, error) in
            if let error = error {
                print(error)
                return
            }
            guard let data = data else {return}
            guard let dataString = String(data: data, encoding: String.Encoding.utf8) else {return}
            // update the UI if all went OK
            DispatchQueue.main.async {
                self.responseLabel.text = dataString
            }
        }
        // start the task
        task.resume()
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }


}

