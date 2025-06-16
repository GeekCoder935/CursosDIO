# 3 - Operações Matemáticas Simples

# Solicitar dois números ao usuário
num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))

# Exibir opções de operação
print("Escolha a operação:")
print("1 - Soma (+)")
print("2 - Subtração (-)")
print("3 - Multiplicação (*)")
print("4 - Divisão (/)")

opcao = input("Digite o número da operação desejada: ")

# Realizar a operação escolhida
if opcao == "1":
    resultado = num1 + num2
    operacao = "+"
elif opcao == "2":
    resultado = num1 - num2
    operacao = "-"
elif opcao == "3":
    resultado = num1 * num2
    operacao = "*"
elif opcao == "4":
    if num2 != 0:
        resultado = num1 / num2
        operacao = "/"
    else:
        print("Erro: Divisão por zero não é permitida.")
        resultado = None
else:
    print("Opção inválida!")
    resultado = None

# Exibir o resultado, se houver
if resultado is not None:
    print(f"{num1} {operacao} {num2} = {resultado}")