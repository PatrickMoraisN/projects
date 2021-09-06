import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Digite a quantidade de elementos do vetor!");
		
		int numberOfElements = sc.nextInt();
		
		int vetor[] = new int[numberOfElements];
		
		int count = 0;
		
		while (count < numberOfElements) {
			System.out.println("Digite o valor do elemento de índice " + count);
			
			vetor[count] = sc.nextInt();
			count += 1;
		}
		
		System.out.printf("Vetor de tamanho " + numberOfElements + " foi criado!%n");
		
		int diff = diffNumbers(vetor);
				
		System.out.println("O módulo da diferença entre maior e menor número do vetor é " + diff);
		
		boolean isSorted = verifySort(vetor);
		if (isSorted) {
			System.out.println("O vetor está em ordem crescente!");
			sc.close();
			return;
		}
		System.out.println("O vetor está em ordem decrescente!");
		sc.close();
	}
}
