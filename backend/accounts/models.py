from django.db import models

class UploadedFile(models.Model):
    file = models.FileField(upload_to='uploads/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.file.name
    
class Reminder(models.Model):
    name = models.CharField(max_length=100)
    time = models.TimeField()

    def __str__(self):
        return self.name
