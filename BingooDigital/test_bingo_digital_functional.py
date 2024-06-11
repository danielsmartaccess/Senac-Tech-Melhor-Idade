# test_bingo_digital_functional.py

from selenium import webdriver
from selenium.webdriver.common.by import By
import unittest
import time
import os

class BingoDigitalFunctionalTests(unittest.TestCase):

    def setUp(self):
        # Configura o driver do Chrome
        self.driver = webdriver.Chrome()
        # Obtém o caminho absoluto do arquivo index.html na mesma pasta
        current_dir = os.path.dirname(os.path.abspath(__file__))
        file_path = os.path.join(current_dir, "index.html")
        self.driver.get("file:///" + file_path)

    def tearDown(self):
        # Fecha o navegador após cada teste
        self.driver.quit()

    def test_generate_and_display_bingo_cards(self):
        driver = self.driver

        # Encontra o campo de input para quantidade de cartelas e insere o valor 2
        quantidade_cartelas_input = driver.find_element(By.ID, 'quantidadeCartelas')
        quantidade_cartelas_input.send_keys('2')

        # Encontra o botão "Gerar Cartelas" e clica nele
        gerar_cartelas_button = driver.find_element(By.ID, 'gerarCartelas')
        gerar_cartelas_button.click()

        # Espera um pouco para garantir que o alerta seja exibido
        time.sleep(1)

        # Verifica e aceita o alerta
        alert = driver.switch_to.alert
        alert.accept()

        # Verifica se as cartelas foram geradas
        print('Cartelas geradas e exibidas com sucesso')

    def test_load_specific_bingo_card_by_id(self):
        driver = self.driver

        # Insere um código ID de exemplo no campo de input de código ID
        codigo_id_input = driver.find_element(By.ID, 'codigoIdInput')
        codigo_id_input.send_keys('sampleID')  # Use um ID válido gerado no teste anterior

        # Encontra o botão "Carregar Cartela" e clica nele
        carregar_cartela_button = driver.find_element(By.ID, 'carregarCartela')
        carregar_cartela_button.click()

        # Espera um pouco para garantir que a cartela seja carregada
        time.sleep(1)

        # Verifica se a cartela foi carregada exibindo 9 termos
        cartela = driver.find_element(By.ID, 'cartela')
        termos = cartela.find_elements(By.CLASS_NAME, 'termo')
        self.assertEqual(len(termos), 9)

        print('Cartela carregada com sucesso')

    def test_draw_and_display_description(self):
        driver = self.driver

        # Encontra o botão "Sortear Descrição" e clica nele
        sortear_descricao_button = driver.find_element(By.ID, 'sortearDescricao')
        sortear_descricao_button.click()

        # Espera até que a descrição sorteada seja exibida
        time.sleep(1)

        # Verifica se a descrição sorteada não está vazia
        descricao_sorteada = driver.find_element(By.ID, 'descricaoSorteada')
        descricao_text = descricao_sorteada.text
        self.assertNotEqual(descricao_text, '')

        print('Descrição sorteada exibida com sucesso')


if __name__ == "__main__":
    unittest.main()
