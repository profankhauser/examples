resource "aws_apigatewayv2_api" "api" {
  name          = "serverless_api"
  description   = "API gateway for terraform example"
  protocol_type = "HTTP"
}
