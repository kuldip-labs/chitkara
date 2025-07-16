const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = './hello.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const helloProto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function main() {
  const client = new helloProto.Greeter('localhost:50051', grpc.credentials.createInsecure());
  client.SayHello({ name: 'World' }, (err, response) => {
    if (err) {
      console.error('Error:', err);
      return;
    }
    console.log('Greeting:', response.message);
  });
}

main();