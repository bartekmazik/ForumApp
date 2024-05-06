from locust import HttpUser, task, between
class WebsiteUser(HttpUser):
    # Ustawienie czasu oczekiwania między zadaniami na 1 do 5 sekund.
    # Pozwala to symulować rzeczywiste zachowanie użytkownika, który nie
    #wykonuje żądań ciągle jeden po drugim,
    # ale z pewnymi przerwami.
    wait_time = between(1, 5)
    
    @task
    def view_homepage(self):
        # Wykonanie żądania GET do strony głównej serwisu.
        # To zadanie symuluje wejście użytkownika na stronę główną.
        self.client.get("http://localhost:5173/?")