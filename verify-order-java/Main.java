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

  public static int diffNumbers(int[] vetor) {
		int highestElem = vetor[0];
		int lowestElem = vetor[0];
		
		for (int i = 0; i < vetor.length; i += 1) {
			if(vetor[i] >= highestElem) {
				highestElem = vetor[i]; 
			}
			if (vetor[i] <= lowestElem) {
				lowestElem = vetor[i];
			}
		}
		return highestElem - lowestElem;
	}

  public static boolean verifySort(int[] a) {
    if (a == null || a.length <= 1) {
        return true;
    }
    for (int i = 0; i < a.length - 1; i++) {
        if (a[i] > a[i + 1]) {
            return false;
        }
    }
    return true;
  }
}
