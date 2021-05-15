Feature: SpurQLabs Assignment

    Scenario: Automate online calculator
        Given Visit online calculator page
        And "add" this two numbers n1="-234234" and n2="345345" and expected result is "111111"
        And "subtract" this two numbers n1="234823" and n2="-23094823" and expected result is "23329646"
        And "divid" this two numbers n1="4000" and n2="200" and expected result is "20"
        And "multiply" this two numbers n1="423" and n2="525" and expected result is "222075"
