@app.route('/send_sms', methods=['POST'])
def send_sms():
    data = request.json
    phone = data['phone']
    message = data['message']

    try:
        # Use your SMS provider's API (e.g., Twilio) to send SMS
        account_sid = 'ACbdae282e8a4e699168b3ee1fa3f146c7'
        auth_token = 'a3493e1389c3102d43467983fa4a39d9'
        client = Client(account_sid, auth_token)

        # client = Client(account_sid, auth_token)  # Replace with your Twilio credentials
        twilio_message = client.messages.create(
            body=message,
            from_='+18624538437',  # Your Twilio number
            to=phone
        )
        return jsonify({"message": "SMS sent successfully!", "sid": twilio_message.sid}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
