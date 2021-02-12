import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService,
              private formBuilder:FormBuilder) {}

  items = this.cartService.getItems();

  clearItems() {
    this.cartService.clearCart;
  }

  ngOnInit() {}
}
