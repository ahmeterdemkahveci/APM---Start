import {Component,OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls:['product-list.component.css']                

})

export class ProductListComponent implements OnInit{
    pageTitle:string='Product List';
    imageWitdh: number = 50;
    imageMargin:number= 2;
    buttonTitle: string='Image';
    listFilter: string;
    showImage: boolean =false;
    errorMessage:string;
    products : IProduct[];

    constructor(private _productService: ProductService){
    }

    toggleImage():void {
        this.showImage = !this.showImage;
    }
    ngOnInit():void{
        this._productService.getProducts().subscribe
        (products=>this.products=products,
        error=>this.errorMessage=<any>error);
        
        console.log( 'in ngOnInit'); 
    }

    onRatingClicked(message :string){
        this.pageTitle='Product List:'+ message;
    }

} 