import { DataSource, In } from "typeorm";
import { User } from "./entities/user.js";
import { Product } from "./entities/product.js";
import { Category } from "./entities/category.js";
import { Inventory } from "./entities/inventory.js";
import { Warehouse } from "./entities/warehouse.js";
import { Order, OrderItem } from "./entities/order.js";
import { Payment } from "./entities/payment.js";

export const SourceData = new DataSource({
    type:'mariadb',
    host: process.env.DB_HOST 
    username: process.env.DB_USER 
    password: process.env.DB_PASS 
    database: process.env.DB_NAME 
    port:process.eng.PORT,
    synchronize:true,
    entities: [User, Product, Category, Inventory, Warehouse, Order, OrderItem, Payment]
})
