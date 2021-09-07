package application;

import java.util.Locale;
import java.util.Scanner;

import entities.Product;

public class program {

	public static void main(String[] args) {
		
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		Product product = new Product();
		
		System.out.println("Enter product data!");
		System.out.println("Name: ");
		product.name = sc.nextLine();
		
		System.out.println("Price: ");
		product.price = sc.nextDouble();
		
		System.out.println("Quantity: ");
		product.quantity = sc.nextInt();
		
    System.out.println();
    System.out.println("Product data: " + product);
    System.out.println();

		System.out.println("Enter the number of products to be added in stock: ");
		int quantity = sc.nextInt();
		product.addProducts(quantity);
		
		System.out.println();
		System.out.println("Updated product data: " + product);
		System.out.println();
		
		System.out.println("Enter the number of products to be removed from stock: ");
		int quantityRemoved = sc.nextInt();
		product.removeProducts(quantityRemoved);
		
		System.out.println();
		System.out.println("Updated product data: " + product);
		System.out.println();
		
		sc.close();
	}

}
