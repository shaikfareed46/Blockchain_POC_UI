import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { FromToServiceService } from '../from-to-service.service';


@Component({
  selector: 'app-from-to',
  templateUrl: './from-to.component.html',
  styleUrls: ['./from-to.component.css']
})
export class FromToComponent implements OnInit {
  
  model:Model=new Model("","",0);
  public users=["A","B"];
  public fromUsers=["A","B"];
  public toUsers=["A","B"];
  public message="";
  public tempAmount=0;
  public senderBalance=40000;
  public recieverBalance=40000;
  public oldSenderBalance=0;
  public oldRecieverBalance=0;
  public showDetails=false;

  constructor(private _fromToService:FromToServiceService) { }

  ngOnInit() {

  }
  onSubmit()
  {
    this.oldRecieverBalance=this.recieverBalance;
    this.oldSenderBalance=this.senderBalance;
    this._fromToService.submit(this.model).subscribe();
    this.tempAmount=this.model.amount;

    
    this.senderBalance=this.oldSenderBalance-this.tempAmount;
    this.recieverBalance=this.oldRecieverBalance+this.tempAmount;
    
    this.message=`$${this.model.amount} Transfered from ${this.model.from} to ${this.model.to}`;
    this.showDetails=true;
  }
  eliminateFromUser()
  {
    
    this.fromUsers=this.users.filter((user)=>user!==this.model.to);
  }
  eliminateToUser()
  {
    
    this.toUsers=this.users.filter((user)=>user!==this.model.from);
    if(this.toUsers.length==1)
    {
      this.model.to=this.toUsers[0];
    }
  }
  submitState()
  {
    if(this.model.from ==="" || this.model.to ==="" || this.model.amount===null || this.model.amount===0 )
    {
      return true;
    }
    else{
      return false;
    }
  }
}


