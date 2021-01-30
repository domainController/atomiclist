# qbfile = open("qbdata.txt", "r")

# for aline in qbfile:
#     values = aline.split()
#     print('QB ', values[0], values[1], 'had a rating of ', values[10] )

# qbfile.close()

# affiche le channelID cad le dernier champs, avec comme separateur de champs une virgule
# ChannelNamesAndIDs = open("channelNames.txt", "r")
# for aline in ChannelNamesAndIDs:
# 	values = aline.split()
# 	print (values[-1])
# ChannelNamesAndIDs.close()

# affiche le channel name genre nickel
# ChannelNamesAndIDs = open("channelNames.txt", "r")

# for aline in ChannelNamesAndIDs:
# 	values = aline.split('"')
# 	print (values[1])
# ChannelNamesAndIDs.close()


# incroyable intuitivement ca marche. affiche le channel name avec underscore
# ChannelNamesAndIDs = open("channelNames.txt", "r")
# for aline in ChannelNamesAndIDs:
# 	values = aline.split('"')
# 	print (values[1].replace(" ", "_"))
# ChannelNamesAndIDs.close()

# gloire a moi, affiche "channel_ID , ChannelName"
ChannelNamesAndIDs = open("channelNames.txt", "r")
for aline in ChannelNamesAndIDs:
	values = aline.split('"')
	valeurs = aline.split()
	print (values[1].replace(" ", "_"),',',valeurs[-1])
ChannelNamesAndIDs.close()


















