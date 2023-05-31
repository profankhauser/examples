require "./participant.rb"

# create participants
bob = Participant.new("bob")
alice = Participant.new("alice")
eve = Participant.new("eve")

# bid by bob
bid1 = bob.bid
alice.receive(bid1)
eve.receive(bid1)

# bid by alice
bid2 = alice.bid
eve.receive(bid2)
bob.receive(bid2)

# bid by eve
bid3 = eve.bid
bob.receive(bid3)
eve.receive(bid3)

# lets collect all bids in a random order
bids = [bid1, bid2, bid3].shuffle
puts "\nbids in random order:"
bids.each{ |bid| puts bid }

# lets order them by their lamport timestamp
bids = bids.sort_by{ |bid| bid[:timestamp] }
puts "\nbids in lamport timestamp order:"
bids.each{ |bid| puts bid }