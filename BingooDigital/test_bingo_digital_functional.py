# test_bingo_digital_functional.py

from selenium import webdriver
from selenium.webdriver.common.by import By
import unittest
import time
import os
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities



class BingoDigitalFunctionalTests(unittest.TestCase):

    def setUp(self):
        # IMPORTANTE, configura chrome driver
        self.driver = webdriver.Chrome()
        # caminho absoluto do arquivo index.html, para abrir o arquivo no navegador
        current_dir = os.path.dirname(os.path.abspath(__file__))
        file_path = os.path.join(current_dir, "index.html")
        self.driver.get("file:///" + file_path)


    def test_generate_and_display_bingo_cards(self):
        driver = self.driver

        quantidade_cartelas_input = driver.find_element(By.ID, 'quantidadeCartelas')
        quantidade_cartelas_input.send_keys('2')

        gerar_cartelas_button = driver.find_element(By.ID, 'gerarCartelas')
        gerar_cartelas_button.click()

        time.sleep(1)

        alert = driver.switch_to.alert
        alert.accept()

        print('Cartelas geradas e exibidas com sucesso')

    def test_load_error_bingo_card_by_id(self):
        driver = self.driver

        codigo_id_input = driver.find_element(By.ID, 'codigoIdInput')
        codigo_id_input.send_keys('error')

        carregar_cartela_button = driver.find_element(By.ID, 'carregarCartela')
        carregar_cartela_button.click()

        time.sleep(1)

        alert = driver.switch_to.alert
        alert.accept()

        print('Código ID inválido ou cartela não existe.')

    def test_load_bingo_card_by_id(self):
        driver = self.driver
        logs = driver.get_log("browser")

        quantidade_cartelas_input = driver.find_element(By.ID, 'quantidadeCartelas')
        quantidade_cartelas_input.send_keys('1')

        gerar_cartelas_button = driver.find_element(By.ID, 'gerarCartelas')
        gerar_cartelas_button.click()

        time.sleep(1)

        alert = driver.switch_to.alert
        alert.accept()

        print('Cartelas geradas e exibidas com sucesso')

        codigo_id_input = driver.find_element(By.ID, 'codigoIdInput')
        for log in logs:
            print(log)

        carregar_cartela_button = driver.find_element(By.ID, 'carregarCartela')
        carregar_cartela_button.click()

        time.sleep(1)

        cartela = driver.find_element(By.ID, 'cartela')
        termos = cartela.find_elements(By.CLASS_NAME, 'termo')
        self.assertEqual(len(termos), 9)

        print('Cartela carregada com sucesso')


    def test_draw_and_display_description(self):
        driver = self.driver

        sortear_descricao_button = driver.find_element(By.ID, 'sortearDescricao')
        sortear_descricao_button.click()

        time.sleep(1)

        descricao_sorteada = driver.find_element(By.ID, 'descricaoSorteada')
        descricao_text = descricao_sorteada.text
        self.assertNotEqual(descricao_text, '')

        print('Descrição sorteada exibida com sucesso')


if __name__ == "__main__":
    unittest.main()
