Feature: Direct Ferries homepage

    Scenario: Popular operators appear
        Given I am on the Direct Ferries '<Country>' homepage
        Then I see popular operators

        Examples:
            | Country |
            | Germany |
            | Italy   |
            | UK      |

    Scenario: Top destinations appear
        Given I am on the Direct Ferries '<Country>' homepage
        Then I see top destinations

        Examples:
            | Country |
            | Germany |
            | Italy   |
            | UK      |

    Scenario: Latest offers appear
        Given I am on the Direct Ferries '<Country>' homepage
        Then I see latest offers

        Examples:
            | Country |
            | Germany |
            | Italy   |
            | UK      |