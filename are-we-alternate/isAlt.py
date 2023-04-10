
import re;
def is_alt(s):
    result = False;
    if (re.match("^[aeiou]?([^aeiou][aeiou])+[^aeiou]?$", s)): 
        result = True;
    return result;






print(is_alt('banana'));