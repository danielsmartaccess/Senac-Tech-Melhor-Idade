# test_bingo_digital_unit.py

import unittest
import execjs
import os

# Carrega o conteúdo do arquivo JavaScript
current_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(current_dir, 'script.js'), 'r', encoding='utf-8') as file:
    js_code = file.read()

# Cria o contexto de execução para o código JavaScript
context = execjs.compile(js_code)

class TestBingoDigital(unittest.TestCase):

    def test_generate_unique_id(self):
        id1 = context.call('gerarCodigoId')
        id2 = context.call('gerarCodigoId')
        self.assertNotEqual(id1, id2, "Os IDs gerados devem ser únicos")

    def test_generate_bingo_cards(self):
        quantidade = 2
        context.call('gerarCartelas', quantidade)
        cartelas = context.eval('cartelas')
        self.assertEqual(len(cartelas), quantidade, "O número de cartelas geradas deve ser igual à quantidade especificada")

    def test_draw_description(self):
        descricao_inicial = context.eval('document.getElementById("descricaoSorteada").textContent')
        context.call('sortearDescricao')
        descricao_sorteada = context.eval('document.getElementById("descricaoSorteada").textContent')
        self.assertNotEqual(descricao_sorteada, descricao_inicial, "A descrição sorteada não deve ser vazia")

if __name__ == "__main__":
    unittest.main()
