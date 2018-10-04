import React, {Component} from 'react'
import ProductsDisplay from './ProductsDisplay'
import data from '../data.json'

class ProductsContainer extends Component{
    state = {
        products: data.data,
        result:null,
        search:''
    }
    
    onChange = (e) =>{
            this.setState({search:e.target.value})
        // const {value} = e.target
        
        console.log(this.state.search)

        // if(value.includes(data.data.name)){
        //     const result = data.name
        //     this.setState({result})
        // }
    
    }

    render(){
        const {products, search} = this.state
        const filtered = products.filter(p=>p.name.includes(search))
        return(
            <div>
                <h1>Productos</h1>
                <div>
                <ProductsDisplay
                
               
                onChange={this.onChange}
                
                />
                <br/>

                {filtered.map(p=><div>{p.name}</div>)}
                
                </div>
                
            </div>
        )
    }
}

export default ProductsContainer
