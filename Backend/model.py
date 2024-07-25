from config import db

class Wine(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    
    
    def to_json(self):
        return {
            "id": self.id,
        }